import { ButtonStyle } from "./styles/style";

const Button = ({ color, content}) => {
    return (
        <>
            <ButtonStyle buttonColor={color}>{content}</ButtonStyle>
        </>
    );
};

export default Button;