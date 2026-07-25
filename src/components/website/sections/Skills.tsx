const skills = [
    "Laravel",
    "Next.js",
    "MySQL"
]


// export default Skills
export default function Skills() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h1 className="text-4xl font-semibold lg:text-5xl">Skills</h1>
                </div>

                <div className="grid gap-4 *:text-center md:grid-cols-3">
                    {skills.map((skill) => (
                        <div key={skill} className="rounded-(--radius) space-y-4 border py-12">
                            <div className="text-5xl text-orange-500 font-bold">{skill}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}