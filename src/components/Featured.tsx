import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MousePointer2, Image as ImageIcon, PlayCircle } from "lucide-react";
import { trackEvent } from "@/lib/ga";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

interface FeaturedStat {
    label: string;
    value: string;
    icon: React.ReactNode;
}

const featuredEvents = [
    {
        title: "Frame Findr - Indreshwar Marathon",
        subtitle: "AI-Powered Event Photo Search Platform",
        description: "Reduced photo discovery time for participants of Indreshwar Marathon using OCR (Optical Character Recognition) and Face Recognition.",
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
    },
    {
        title: "Frame Findr - March 1st Event",
        subtitle: "AI-Powered Event Photo Search Platform",
        description: "Another successful deployment of our OCR photo discovery platform, processing thousands of images efficiently during our March 1st event.",
        videoUrl: "/Atharva-Portfolio/assets/videos/frame-findr-march-event.mov",
        posterUrl: "/Atharva-Portfolio/assets/images/frame-findr-poster.png",
        stats: [
            {
                label: "Images Processed",
                value: "2000+",
                icon: <ImageIcon className="h-5 w-5 text-blue-500" />,
            },
            {
                label: "Event Count",
                value: "2.4K",
                icon: <MousePointer2 className="h-5 w-5 text-purple-500" />,
            },
            {
                label: "Total Users",
                value: "306",
                icon: <Users className="h-5 w-5 text-emerald-500" />,
            },
        ] as FeaturedStat[],
    }
];

const Featured = () => {
    const plugin = useRef(
        Autoplay({ delay: 6000, stopOnInteraction: true })
    );

    if (!featuredEvents || featuredEvents.length === 0) return null;

    return (
        <section id="featured" className="py-20 bg-background relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/20 text-primary animate-fade-in">
                        Recent Milestones
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 leading-tight">
                        Featured Spotlight
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto px-12 md:px-16">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[plugin.current]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {featuredEvents.map((event, eventIndex) => (
                                <CarouselItem key={eventIndex}>
                                    <div className="p-1">
                                        <div className="text-center mb-8">
                                            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                                                {event.title}
                                            </h3>
                                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                                {event.description}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                                            {/* Stats Section */}
                                            <div className="lg:col-span-2 space-y-6">
                                                {event.stats.map((stat, index) => (
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
                                            <div className="lg:col-span-3">
                                                <div className="relative group rounded-3xl overflow-hidden border border-border shadow-2xl bg-black/95">
                                                    <video
                                                        className="w-full aspect-video object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                                        controls
                                                        preload="metadata"
                                                        poster={event.posterUrl}
                                                        onPlay={() => trackEvent('video_play', { project: event.title })}
                                                        onPause={() => trackEvent('video_pause', { project: event.title })}
                                                    >
                                                        <source src={event.videoUrl} type="video/mp4" />
                                                        <source src={event.videoUrl} type="video/quicktime" />
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
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="-left-4 md:-left-12 lg:-left-16" />
                        <CarouselNext className="-right-4 md:-right-12 lg:-right-16" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Featured;
