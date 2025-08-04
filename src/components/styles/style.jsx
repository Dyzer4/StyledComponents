import styled from 'styled-components'

export const ButtonStyle = styled.button`
    background-color: ${props => props.buttonColor};
    padding: 10px 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    align-self: center;
`

export const FormStyle = styled.form`
    display:flex;
    flex-direction:column;
    gap: 30px;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
`

export const Input = styled.input`
    color: ${props => props.inputColor};
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 10px 15px;
    border-radius: 5px;
`

export const Card = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
  margin-top: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  h2 {
    color: blue;
  }

  p {
    color: #666;
  }
`