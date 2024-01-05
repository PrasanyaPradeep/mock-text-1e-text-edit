import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #25262c;
  padding: 30px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`

export const CardContainer = styled.div`
  background-color: #1b1c22;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 90%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => props.color};
`

export const ImageElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 200px;
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`

export const EditorContainer = styled.div`
  background-color: #25262c;
  width: 100%;
  border: 1px solid #cbd5e1;
  color: #ffffff;
  border-radius: 8px;
  margin-top: 20px;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const HrElement = styled.hr`
  width: 100%;
  border: 1px solid #cbd5e1;
  opacity: 0.5;
`

export const TextAreaElement = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-family: 'Roboto';
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-style: ${props => props.fontStyle};
  font-weight: ${props => props.fontWeight};
  text-decoration: ${props => props.textDecoration};
`
