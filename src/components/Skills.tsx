const skills = [
    "laravel",
    "Next.js",
    "MySQL"
]

function Skills() {
  return (
    <section>
        <h1 className="text-3xl font-bold">
            Skills
        </h1>

        <div>
            {skills.map((skill) => (
                <p key = {skill}>
                    {skill}
                </p>
            ))}
        </div>
    </section>
  )
}

export default Skills
