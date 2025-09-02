import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const GITHUB_USERNAME = "JamesVSeVERYBODY";
const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop";

export function Projects() {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repos");
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(repos.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(repos.length / 3)) % Math.ceil(repos.length / 3));
  };

  const totalSlides = Math.ceil(repos.length / 3);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A showcase of my recent work and passion projects
            </p>
          </div>

          {loading && <div className="text-center">Loading projects...</div>}
          {error && <div className="text-center text-red-500">{error}</div>}

          {!loading && !error && (
            <div className="relative">
              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border hover:bg-background/90 transition-all duration-300 shadow-lg"
                disabled={totalSlides <= 1}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border hover:bg-background/90 transition-all duration-300 shadow-lg"
                disabled={totalSlides <= 1}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: totalSlides }, (_, slideIndex) => (
                    <div key={slideIndex} className="flex gap-8 min-w-full">
                      {repos.slice(slideIndex * 3, slideIndex * 3 + 3).map((repo, index) => (
                        <Card key={repo.id} className="flex-1 border-border bg-card/50 backdrop-blur-sm overflow-hidden group hover:shadow-xl transition-all duration-500 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                          <div className="relative overflow-hidden">
                            <img
                              src={PLACEHOLDER_IMAGE}
                              alt={repo.name}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                <Button size="icon" variant="secondary" className="h-8 w-8">
                                  <Github className="h-4 w-4" />
                                </Button>
                              </a>
                              {repo.homepage && (
                                <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                                  <Button size="icon" variant="secondary" className="h-8 w-8">
                                    <ExternalLink className="h-4 w-4" />
                                  </Button>
                                </a>
                              )}
                            </div>
                          </div>

                          <CardHeader>
                            <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                              {repo.name}
                            </CardTitle>
                          </CardHeader>

                          <CardContent className="space-y-4">
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {repo.description || "No description provided."}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline" className="text-xs border-primary/20 text-primary">
                                GitHub Repo
                              </Badge>
                              {repo.language && (
                                <Badge variant="outline" className="text-xs border-primary/20 text-primary">
                                  {repo.language}
                                </Badge>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide Indicators */}
              {totalSlides > 1 && (
                <div className="flex justify-center mt-8 gap-2">
                  {Array.from({ length: totalSlides }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-primary scale-110' 
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}