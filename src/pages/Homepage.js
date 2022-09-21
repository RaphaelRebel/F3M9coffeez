import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card"

const Homepage = () => {
    return(
        <>
        <Navigation />
        <Header 
            bigTitle="Coffeez" 
            smallTitle="Coffee that will wake you up"
            buttonText="Order now"
        />

        <Section headerTitle="Our qualities">
                    <Card cardImg="pexels-chevanon-photography-324028.jpg" cardText="De beste koffie in het land. Dat is hier te vinden."/>
                    <Card cardImg="pexels-anastasia-belousova-3556686.jpg" cardText="Van deze koffie wordt jouw ochtend beter."/>
                    <Card cardImg="pexels-bianca-gasparoto-1752804.jpg" cardText="Koffie? Dat hebben wij"/>
                    <Card cardImg="pexels-tom-swinnen-1309778.jpg" cardText="Heb jij al deze nieuwe vanilla smaak koffie geprobeerd?"/>
        </Section>

       

        </>
    );
}

export default Homepage