import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {SvgXml} from "react-native-svg";

const svgCode = `
<svg xmlns="http://www.w3.org/2000/svg" width="132" height="120" viewBox="0 0 132 120" fill="none">
  <rect width="120" height="120" rx="16" fill="#F6F6F6"/>
  <circle cx="119.5" cy="93.5" r="12" fill="white" stroke="#FF6C00"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M120 87H119V93H113V94H119V100H120V94H126V93H120V87Z" fill="#FF6C00"/>
</svg>
`;

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/background.jpg")}
      />
      <View style={styles.inputContainer}>
        <SvgXml
          xml={svgCode}
          width="132"
          height="120"
          style={styles.svgContainer}
        />
        <Text style={styles.headerText}>Registration</Text>
        <TextInput style={styles.input} placeholder="Login" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Sing In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>
            Already have an account? <Text style={styles.link}>Sign in</Text>
          </Text>
        </TouchableOpacity>
        <Image
          style={styles.indicator}
          source={require("../assets/images/home_Indicator.jpg")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 16,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  svgContainer: {
    zIndex: 1,
    marginBottom: 32,
    marginTop: -60,
  },
  headerText: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  btn: {
    display: "flex",
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginBottom: 16,
    marginTop: 43,
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    color: "#FFFFFF",
  },
  btnText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  linkText: {
    color: "#1B4371",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  link: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  indicator: {
    alignSelf: "center",
    marginTop: 66,
    marginBottom: 5,
  },
});
