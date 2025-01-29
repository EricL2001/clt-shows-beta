import Typewriter from "@/components/fancy/typewriter"

export default function Preview() {
  return (
    <div className="w-full h-full md:text-4xl lg:text-5xl sm:text-3xl text-2xl flex flex-row items-start justify-start bg-white text-foreground dark:text-muted font-normal overflow-hidden p-16 pt-48">
      <p className="whitespace-pre-wrap">
        <span>{"Browse shows at "}</span>
        <Typewriter
          text={[
            "The Visulite",
            "Neighborhood Theatre",
            "Snug Harbor",
            "The Evening Muse",
            "all independent venues in Charlotte"
          ]}
          speed={40}
          className="text-yellow-500"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar={"_"}
        />
      </p>
    </div>
  )
}
