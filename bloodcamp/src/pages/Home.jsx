import { useEffect, useRef } from "react";
import aud from '../assets/tamil_speech.mp3';

const Home = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        const playAudio = () => {
            if (audioRef.current) {
                audioRef.current.play().catch(error => console.log("Autoplay blocked:", error));
            }
        };

        document.body.addEventListener("click", playAudio, { once: true });
        return () => document.body.removeEventListener("click", playAudio);
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>இரத்த தான முகாம் வழிமுறைகள்</h1>
            <p style={styles.para}>உங்கள் இரத்த தானம் பலரின் உயிரைக் காப்பாற்றும்! தயவுசெய்து கீழ்க்கண்ட வழிமுறைகளை பின்பற்றுங்கள்.</p>
            <ul style={styles.guidelines}>
                <li>நீங்கள் 18-65 வயதிற்குட்பட்டவராகவும், குறைந்தது 50 கிலோ எடையுடன் இருக்கவும் வேண்டும்.</li>
                <li>இரத்ததானத்திற்கு முன் ஆரோக்கியமான உணவு உண்பதோடு, பரவலாக நீர் குடிக்கவும்.</li>
                <li>இரத்ததானத்திற்கு 24 மணி நேரத்திற்கு முன் மது அருந்த வேண்டாம்.</li>
                <li>கடந்த 3 மாதங்களுக்குள் இரத்த தானம் செய்திருக்கக் கூடாது.</li>
                <li>உங்களுக்கு உடல்நலம் சரியாக இல்லையெனில், உங்கள் தானத்தை பிற்போக்கவும்.</li>
                <li>பதிவுக்கு செல்ல செல்லும் போது உங்கள் அடையாள அட்டை கொண்டு வரவும்.</li>
            </ul>
            <audio id="bgAudio" ref={audioRef} hidden>
                <source src={aud} type="audio/mp3" />
                உங்கள் உலாவியில் ஆடியோ இயக்கம் ஆதரிக்கப்படவில்லை.
            </audio>
            <p style={styles.footer}>உங்கள் கருணைமிக்க செயல் பலரின் உயிரைக் காப்பாற்றும்! ❤️</p>
        </div>
    );
};

const styles = {
    container: {
        width: "80%",
        margin: "50px auto",
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
    },
    para: {
        color: "black",
    },
    heading: {
        color: "#c82333",
    },
    guidelines: {
        textAlign: "left",
        padding: "10px",
        listStyleType: "disc",
        color: "black",
    },
    footer: {
        marginTop: "20px",
        fontSize: "14px",
        color: "#555",
    },
};

export default Home;