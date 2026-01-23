import {
  Guitar,
  Gamepad2,
  BookOpen,
  Dumbbell,
  Camera,
  Code,
} from "lucide-react";

export const HobbiesSection = () => {
  const hobbies = [
    {
      id: 1,
      name: "Chess Player",
      description: "Passionate chess player who enjoys strategic thinking",
      icon: Gamepad2,
    },
    {
      id: 2,
      name: "Guitarist",
      description: "I enjoy playing guitar and exploring different music genres",
      icon: Guitar,
    },
    {
      id: 3,
      name: "Reading",
      description: "Avid reader interested in tech, science, and fiction",
      icon: BookOpen,
    },
    {
      id: 4,
      name: "Fitness",
      description: "I enjoy activities like hiking and working out to stay active",
      icon: Dumbbell,
    },
    {
      id: 5,
      name: "Photography",
      description: "Capturing moments and exploring visual storytelling",
      icon: Camera,
    },
    {
      id: 6,
      name: "Coding",
      description: "Building projects and exploring new technologies",
      icon: Code,
    },
  ];

  return (
    <section id="hobbies" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Hobbies</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Beyond coding, I enjoy a variety of activities that keep me creative,
          active, and inspired.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby) => {
            const IconComponent = hobby.icon;
            return (
              <div
                key={hobby.id}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="mb-4 inline-block p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{hobby.name}</h3>
                <p className="text-muted-foreground">{hobby.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};