import {FormStyle , Input} from "./styles/style"


const Form = () => {
    return(
        <FormStyle>
            <Input type="text" defaultValue="Olá"/>
            <Input type="text" defaultValue="tudo bem" inputColor="red"/>
        </FormStyle>
    )
}

export default Form