let marks = [
    {
        title: "JS",
        value: 10
    },
    {
        title: "CSS",
        value: 6
    },
]

for (let i = 0; i < marks.length; i++) {
    let mark = marks[i]
    console.log("title: " + mark.title, ", mark: " + mark.value)
}