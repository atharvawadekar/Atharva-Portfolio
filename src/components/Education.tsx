import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <Card className="hover:shadow-lg transition-smooth border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    University at Buffalo, The State University of New York
                  </CardTitle>
                  <p className="text-lg font-semibold text-primary">
                    Master of Science in Computer Science and Engineering
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Buffalo, NY
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Expected Jan 2026
                    </span>
                    <span className="font-semibold text-primary">
                      GPA: 3.95/4.0
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div>
                <h4 className="font-semibold mb-2 text-card-foreground">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data structures and algorithms",
                    "Operating Systems",
                    "Machine Learning",
                    "Deep Learning",
                    "Computer Vision"
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-smooth border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    Veermata Jijabai Technological Institute (VJTI), Mumbai
                  </CardTitle>
                  <p className="text-lg font-semibold text-primary">
                    Bachelor of Technology in Electronics and Telecommunications Engineering
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Mumbai, IN
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Aug 2018 - May 2022
                    </span>
                    <span className="font-semibold text-primary">
                      GPA: 8.30/10.0
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div>
                <h4 className="font-semibold mb-2 text-card-foreground">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python Programming",
                    "Linux System Administration",
                    "C++ programming",
                    "Digital Signal Processing",
                    "Object Oriented Programming",
                    "System Design Principles"
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
