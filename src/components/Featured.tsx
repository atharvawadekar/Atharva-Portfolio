import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MousePointer2, Image as ImageIcon, PlayCircle } from "lucide-react";

interface FeaturedStat {
    label: string;
    value: string;
    icon: React.ReactNode;
}

const featuredData = {
    title: "Frame Findr",
    subtitle: "AI-Powered Event Photo Search Platform",
    description: "Most recent event milestone: Reduced photo discovery time for participants of Indreshwar Marathon using OCR (Optical Character Recognition).",
    videoUrl: "/Atharva-Portfolio/assets/videos/frame-findr-demo.mov",
    posterUrl: "/Atharva-Portfolio/assets/images/frame-findr-poster.png",
    stats: [
        {
            label: "Images Processed",
            value: "3000+",
            icon: <ImageIcon className="h-5 w-5 text-blue-500" />,
        },
        {
            label: "User Interactions",
            value: "2.7K+",
            icon: <MousePointer2 className="h-5 w-5 text-purple-500" />,
        },
        {
            label: "Total Users",
            value: "290+",
            icon: <Users className="h-5 w-5 text-emerald-500" />,
        },
    ] as FeaturedStat[],
};

const Featured = () => {
    if (!featuredData) return null;

    return (
        <section id="featured" className="py-20 bg-background relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/20 text-primary animate-fade-in">
                        Recent Milestone
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 leading-tight">
                        Featured Spotlight: {featuredData.title}
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {featuredData.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center max-w-7xl mx-auto">
                    {/* Stats Section */}
                    <div className="lg:col-span-2 space-y-6 animate-slide-in-left">
                        {featuredData.stats.map((stat, index) => (
                            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                                <CardContent className="p-6 flex items-center gap-4">
                                    <div className="p-3 rounded-2xl bg-background border border-border group-hover:bg-primary/5 transition-colors">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">{stat.value}</p>
                                        <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
                                            {stat.label}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Video Section */}
                    <div className="lg:col-span-3 animate-slide-in-right">
                        <div className="relative group rounded-3xl overflow-hidden border border-border shadow-2xl bg-black/95">
                            <video
                                className="w-full aspect-video object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                controls
                                preload="metadata"
                                poster={featuredData.posterUrl}
                            >
                                <source src={featuredData.videoUrl} type="video/mp4" />
                                <source src={featuredData.videoUrl} type="video/quicktime" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white/90 text-sm font-medium flex items-center gap-2">
                                    <PlayCircle className="h-4 w-4" />
                                    Live Platform Demo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
