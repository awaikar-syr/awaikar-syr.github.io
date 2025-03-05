import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from 'next/image';
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Yasin Shah",
    position: "Working with Ankit was a great experience. He has a natural ability to break down complex data and turn it into insights that actually make sense. His skills in SQL, Python, and Power BI helped us make smarter business decisions faster. More than just technical skills, he’s a great problem solver who knows how to ask the right questions and get to the heart of a challenge.",
    avatar: memojiAvatar1,
  },
  {
    name: "Matthew Maloney",
    position: "Professor of Visual Analytics @ Syracuse University",
    text: "Ankit is exceptional at turning complex data into clear, interactive dashboards. In our Visual Analytics course, he played a key role in a renewable energy investment project, making insights easy for non-technical stakeholders. His ability to communicate data-driven decisions and business impact sets him apart. He’s a quick learner, analytical thinker, and natural leader.",
    avatar: memojiAvatar5,
  },
  {
    name: "Jeffrey Saltz",
    position: "Professor of AI & Human-Centered Design  @ Syracuse University",
    text: "Ankit is a strategic thinker with strong execution skills. In our Human-Centered AI course, he led a project that automated career insights for students and employers, cutting manual effort by 40%. His ability to understand business needs, work with AI, and simplify insights for decision-makers makes him stand out.",
    avatar: memojiAvatar3,
  },
  {
    name: "Disha Negi",
    position: "Cloud Engineer @iConsult Collaborative",
    text: "Ankit thinks like a product leader and executes like an analyst. In our AI-driven Career Analytics Tool, he ensured our solution was user-friendly, data-driven, and business-impactful, reducing external dependencies by 40%. His ability to understand business problems, work across teams, and simplify complex data makes him a perfect fit for Business Analyst and Product roles.",
    avatar: memojiAvatar4,
  },
 
];

export const TestimonialsSection = () => {
  return(
  <div className="py-16 lg:py-24">
    <div className="container">
      <SectionHeader eyebrow="Happy Clients" 
      title="What Clients Say about Me" 
      description="Don't just take my word for it. See what my clients have to say about my work." 
      />
      
      <div className="mt-12 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4"> 
        <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
          {[...new Array(2)].fill(0).map((_, index)=> (
            <Fragment key={index}>
            {testimonials.map((testimonial) => (
              <Card key = {testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"> 
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="max-h-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/40">{testimonial.position}</div>
                  </div> 
                </div>  
                <p className= "mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
              </Card>
            ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};
