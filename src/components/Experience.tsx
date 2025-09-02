import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  logo: string;
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    logo: "/src/assets/telkom.jpg",
    title: "Digital Service, Telkom Test House - Web Development",
    company: "Telkom Indonesia",
    type: "Internship",
    period: "Jun 2024 - Sep 2024 · 4 mos",
    location: "Bandung, West Java, Indonesia · On-site",
    description:
      "Designed and developed the Telkom Test House (TTH) Visitor web application using HTML and React.js, ensuring a seamless user experience. Contributed to frontend development and handled some backend integration."
  },
  {
    logo: "/src/assets/bangkit_academy_logo.jpg",
    title: "Bangkit 2024 Batch 6 Cohort : Machine Learning Path",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    type: "Full-time",
    period: "Feb 2024 - Jul 2024 · 6 mos",
    location: "Kota Surabaya, East Java, Indonesia · Remote",
    description:
      "Completed the Machine Learning path in Bangkit Academy, focusing on deep learning, data science, and real-world ML projects."
  },
  {
    logo: "/src/assets/hima.jpg",
    title: "Entrepreneur Division at HIMA TEKKOM ITS 2023 - 2024",
    company: "Himpunan Mahasiswa Teknik Komputer (HIMATEKKOM) ITS",
    type: "Contract",
    period: "Jun 2023 - Apr 2024 · 11 mos",
    location: "Surabaya, East Java, Indonesia · On-site",
    description:
      "Person in charge of HIMATEKKOM Store in the Entrepreneur Division of HIMATEKKOM ITS."
  },
  {
    logo: "/src/assets/mage.jpg",
    title: "MAGE 8 ITS",
    company: "MAGE (Multimedia And Game Event) 9",
    type: "Seasonal",
    period: "Aug 2022 - Dec 2022 · 5 mos",
    location: "Kota Surabaya, East Java, Indonesia · On-site",
    description:
      "Participated in MAGE 8 ITS, contributing to multimedia and game development events."
  },
  {
    logo: "/src/assets/sman3bdg_logo.jpg",
    title: "Research Based Learning (RBL)",
    company: "SMA Negeri 3 Bandung",
    type: "Part-time",
    period: "Jan 2020 - May 2020 · 5 mos",
    location: "Bandung, West Java, Indonesia",
    description:
      "Engaged in research-based learning projects, focusing on scientific research and presentation."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">
              Experience
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            {experiences.map((exp, idx) => (
              <Card key={idx} className="border-border bg-card/50 backdrop-blur-sm overflow-hidden group hover:shadow-xl transition-all duration-500 animate-slide-up">
                <div className="flex gap-6 items-start p-6">
                  <img src={exp.logo} alt={exp.company} className="w-16 h-16 rounded-lg object-contain bg-white border" />
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 items-center mb-1">
                      <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs border-primary/20 text-primary ml-2">
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium mb-1">
                      {exp.company}
                    </div>
                    <div className="text-xs text-muted-foreground mb-1">
                      {exp.period} · {exp.location}
                    </div>
                    <CardContent className="pl-0 pt-2 pb-0">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 