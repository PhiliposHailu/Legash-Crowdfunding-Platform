import HeroCategoryCard from "./HeroCategoryCard"

function LandingPage() {
    const postions = [
        `top-16 left-16`,
        `top-16 right-16`,
        `bottom-16 left-10`,
        `bottom-16 right-10`
    ]
    const info = [
    {
        img: "https://picsum.photos/200",
        name: "Medcine"
    },
    {
        img: "https://picsum.photos/200",
        name: "Medcine"
    },
    {
        img: "https://picsum.photos/200",
        name: "Medcine"
    },
    {
        img: "https://picsum.photos/200",
        name: "Medcine"
    },
    ]
    const imgCards =  info.map((item,i) => {
        return <div className={`absolute ${postions[i]}`}>
        <HeroCategoryCard />
        </div>
    })

    return (
        <section className="relative bg-primary-light p-5 flex justify-center min-h-100">
        {imgCards}
        <div className="flex flex-col items-center p-5 bg-background rounded-full w-100 gap-7">
          <p>Fundraising Platform</p>
          <h1 className="text-wrap text-center">Successful fundraisers start here</h1>
          <button className="bg-primary text-background rounded p-2 pl-7 pr-7">Start Fundrasing for Free </button>
        </div>

      </section>
    )
}

export default LandingPage