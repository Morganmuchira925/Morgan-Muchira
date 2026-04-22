import React, { useState } from "react";
import {
  Guitar,
  Gamepad2,
  BookOpen,
  Dumbbell,
  Camera,
  Ghost,
  Info,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export const HobbiesSection = () => {
  const hobbies = [
    { id: 1, name: "Chess Player", description: "Passionate chess player who enjoys strategic thinking", icon: Gamepad2, image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Guitarist", description: "I enjoy playing guitar and exploring music.", icon: Guitar, image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "Reading", description: "Avid reader interested in tech and fiction.", icon: BookOpen, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400" },
    { id: 4, name: "Fitness", description: "I enjoy hiking and working out.", icon: Dumbbell, image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400" },
    { id: 5, name: "Photography", description: "Capturing moments and visual storytelling.", icon: Camera, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400" },
    { id: 6, name: "Gaming", description: "Competitive gaming and exploring immersive worlds.", icon: Ghost, image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400" },
    { id: 7, name: "Travel", description: "Exploring new cultures and hidden gems.", icon: Info, image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=400" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeHobby = hobbies[activeIndex];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % hobbies.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + hobbies.length) % hobbies.length);

  return (
    <section id="hobbies" className="py-[6rem] px-[1rem]">
      <div className="container mx-auto max-w-[70rem]">
        <header className="mb-[3rem] text-center">
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold mb-[1rem]">
            My <span className="text-primary">Hobbies</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-[1rem] md:auto-rows-[12.5rem]">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            const isFirst = index === 0;
            const isActive = activeIndex === index;

            return (
              <React.Fragment key={hobby.id}>
                <div
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`relative group overflow-hidden rounded-[0.75rem] border cursor-pointer transition-all duration-300
                    ${isActive ? "ring-[0.125rem] ring-primary border-primary" : "border-border hover:border-primary/50"}
                    ${isFirst ? "md:row-span-2 md:col-span-1 h-[20rem] md:h-auto" : "h-[12.5rem] md:h-auto"}`}
                >
                  <img src={hobby.image} alt={hobby.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className={`absolute inset-0 transition-colors ${isActive ? "bg-black/20" : "bg-black/50 group-hover:bg-black/30"}`} />
                  
                  <div className="absolute top-[1rem] left-[1rem] z-10">
                    <span className="bg-background/90 backdrop-blur-sm text-[0.75rem] font-bold px-[0.5rem] py-[0.25rem] rounded-[0.25rem]">
                      {hobby.id}
                    </span>
                  </div>

                  <div className="absolute bottom-[1rem] left-[1rem] right-[1rem] z-10 flex items-center gap-2">
                    <Icon size="1.2rem" className="text-white" />
                    <p className="text-white font-bold text-[1rem]">{hobby.name}</p>
                  </div>
                </div>

                {/* MOBILE INFO: Only visible on small screens directly under the clicked card */}
                {isActive && (
                  <div className="md:hidden bg-muted/30 rounded-[0.75rem] p-[1.5rem] border border-primary/20 mt-[-0.5rem] mb-[0.5rem] animate-in fade-in slide-in-from-top-2">
                    <h4 className="text-[0.8rem] font-bold text-primary uppercase tracking-widest mb-1">{hobby.name}</h4>
                    <p className="text-[0.9rem] text-muted-foreground italic">{hobby.description}</p>
                  </div>
                )}
              </React.Fragment>
            );
          })}

          {/* DESKTOP INFO: Full width at the bottom */}
          <div className="hidden md:flex md:col-span-4 md:row-start-3 bg-muted/40 rounded-[1rem] p-[2rem] flex-col justify-center items-center text-center border border-dashed border-border min-h-[10rem]">
            <div className="mb-[0.75rem] p-[0.5rem] rounded-full bg-primary/10 text-primary">
              <activeHobby.icon size="1.5rem" />
            </div>
            <h4 className="text-[0.9rem] uppercase tracking-[0.25rem] text-primary font-bold mb-[0.5rem]">
              {activeHobby.name}
            </h4>
            <p className="text-[1.1rem] text-muted-foreground italic max-w-[45rem]">
              {activeHobby.description}
            </p>
          </div>
        </div>

        {/* NAVIGATION ARROWS FOOTER */}
        <div className="mt-[4rem] flex justify-center items-center gap-[2rem]">
          <button 
            onClick={handlePrev}
            className="p-[1rem] rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all active:scale-95"
            aria-label="Previous hobby"
          >
            <ChevronLeft size="1.5rem" />
          </button>
          
          <div className="flex gap-[0.5rem]">
            {hobbies.map((_, i) => (
              <div 
                key={i} 
                className={`h-[0.25rem] transition-all duration-300 rounded-full ${i === activeIndex ? "w-[2rem] bg-primary" : "w-[0.5rem] bg-border"}`} 
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="p-[1rem] rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all active:scale-95"
            aria-label="Next hobby"
          >
            <ChevronRight size="1.5rem" />
          </button>
        </div>
      </div>
    </section>
  );
};