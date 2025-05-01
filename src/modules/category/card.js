// card.js
import { HoverEffect } from "@/components/ui/category";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Bollywood",
    category:'bollywood',
    description:
      "Bollywood, the vibrant heart of Indian cinema, dazzles with its colorful storytelling, extravagant musical numbers, and captivating performances, enthralling audiences worldwide with its unique blend of drama, romance, and spectacle.",
    link: "https://stripe.com",
    image: "https://lastfm.freetls.fastly.net/i/u/ar0/961493f7b7b04eb294fcfbe2dbdfd828.jpg" // Path to the image for Bollywood project
  },
  {
    title: "Anime",
    category:'anime',
    description:
      "Anime, a dynamic form of Japanese animation, captivates audiences with its diverse genres, imaginative storytelling, vibrant visuals, and compelling characters, transcending cultures to become a global phenomenon of creativity and expression.",
    link: "https://hianime.to",
    image: "https://www.nicepng.com/png/full/348-3480564_son-goku-dragon-ball-z-the-complete-collection.png" // Path to the image for Anime project
  },
  {
    title: "Marvel",
    category:'marvel',
    description:
      "Marvel, the legendary comic book universe turned cinematic powerhouse, enchants fans with its iconic superheroes, epic battles, intricate storytelling, and boundless imagination, shaping pop culture and inspiring generations with its heroic adventures.",
    link: "https://google.com",
    image: "https://pbs.twimg.com/profile_images/1560508217867718657/8ak-Td6l_400x400.jpg" // Path to the image for Marvel project
  },
  {
    title: "Sci-Fi",
    category:'sci-fi',
    description:
      "Marvel, the legendary comic book universe turned cinematic powerhouse, enchants fans with its iconic superheroes, epic battles, intricate storytelling, and boundless imagination, shaping pop culture and inspiring generations with its heroic adventures.",
    link: "https://google.com",
    image: "https://preview.redd.it/dialogue-portraits-for-a-sci-fi-game-v0-o660nmc9n3lc1.png?width=400&format=png&auto=webp&s=c4f1fa222eb4929c17fa06f783fa200a338c9d19" // Path to the image for Marvel project
  },
  // Add image paths for other projects
];
