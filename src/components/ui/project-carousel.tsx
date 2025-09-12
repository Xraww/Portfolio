"use client";

import * as React from "react"
import { useEffect, useState } from "react";
import { Button } from "./button";
import { Carousel, CarouselContent, CarouselItem, CarouselApi, } from "./carousel";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "@/lib/projects";

export default function ProjectCarousel(props: {categories: string[], project: Project}) {
    const { categories, project } = props;
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [activeCategory, setActiveCategory] = useState<string | "landing">(categories[2]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // If the active category is a media category, we need to set the active category to "media" to fix the image path
    const realActiveCategory = activeCategory.includes("media") ? "media" : activeCategory;

    useEffect(() => {
        if (!api) {
          return
        }

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])
    
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-wrap gap-4 flex-col md:flex-row justify-center">
                {categories.map((category) => (
                    category !== "base_url" && category !== "preview" ? (
                        <div key={category} className="w-full md:w-auto">
                            <Button variant={activeCategory === category ? "default" : "outline"} className="w-full md:w-auto cursor-pointer" onClick={() => {
                                setActiveCategory(category);
                            }}>{category.includes("media") ? category.charAt(0).toUpperCase() + category.slice(1).replace("_", " ") : category.charAt(0).toUpperCase() + category.slice(1)}</Button>
                        </div>
                    ) : null
                ))}
            </div>

            <p className="text-sm text-muted-foreground text-center md:hidden">Click on the image to view it in full screen !</p>

            <div className="flex flex-col gap-4">
                <Carousel setApi={setApi} className="border rounded-lg">
                    <CarouselContent>
                        {Array.isArray(project.images?.[activeCategory]) &&
                            project.images![activeCategory].map((image: string, index: number) => (
                                <CarouselItem key={index} className="w-[800px] h-[600px]">
                                    <Image
                                        src={`${project.images?.base_url}${realActiveCategory}/${image}`}
                                        alt={project.name}
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover select-none cursor-pointer hover:opacity-90 rounded-lg"
                                        unoptimized={true}
                                        onClick={() => setSelectedImage(`${project.images?.base_url}${realActiveCategory}/${image}`)}
                                    />
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                </Carousel>

                {Array.isArray(project.images?.[activeCategory]) && project.images?.[activeCategory]?.length > 1 && (
                    <div className="flex items-center justify-center gap-4">
                        <Button
                            variant="ghost"
                            size="sm"
                            disabled={current === 0}
                            className="cursor-pointer h-8 w-8"
                            onClick={() => {
                                api?.scrollPrev()
                            }}
                        >
                            <ChevronLeft className="h-3 w-3" />
                        </Button>

                        <div className="flex gap-2">
                            {project.images?.[activeCategory]?.map((_, index) => (
                                <Button
                                    key={index}
                                    size="icon"
                                    className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                                        current === index ? 'bg-primary' : 'bg-muted'
                                    } hover:bg-primary/80`}
                                    onClick={() => {
                                        setCurrent(index)
                                        api?.scrollTo(index)
                                    }}
                                />
                            ))
                        }
                        </div>

                        <Button
                            variant="ghost"
                            size="sm"
                            disabled={current === project.images?.[activeCategory]?.length - 1}
                            className="cursor-pointer h-8 w-8"
                            onClick={() => {
                                api?.scrollNext()
                            }}
                        >
                            <ChevronRight className="h-3 w-3" />
                        </Button>
                    </div>
                )}
            </div>

            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-[90vw] max-h-[90vh]">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 text-white bg-accent cursor-pointer hover:text-gray-300 transition-colors"
                        >
                            <X size={24}/>
                        </Button>

                        <Image
                            src={selectedImage}
                            alt={project.name}
                            width={1200}
                            height={800}
                            className="max-w-full max-h-full object-contain"
                            unoptimized={true}
                            onClick={(e) => e.stopPropagation()}
                        />
                     </div>
                 </div>
             )}
         </div>
     )
 }