import Hero from '../components/Hero'
import Videos from '../components/Videos'
import Guide from '../components/Guide'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <div className="contentContainer">
          <Videos />
          <Guide />
        </div>

        <style jsx>
                {`
                    .contentContainer {
                      display: flex;
                      flex-direction: column;
  
                    }
                `}
            </style>
      </main>
    </>
  )
}
