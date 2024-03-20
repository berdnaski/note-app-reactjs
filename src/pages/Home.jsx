import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Note from "../components/Note/Note"
import Section from "../components/Section/Section"

export function Home() {
  return (
    <div>
      <Header />
      <Section />
      <div>
        <Note />
        <Note />
      </div>
      <Footer />
    </div>
  );
}