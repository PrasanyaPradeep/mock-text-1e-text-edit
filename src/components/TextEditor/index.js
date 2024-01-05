/* eslint-disable import/named */
import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  CardContainer,
  Heading,
  Button,
  Image,
  ImageElement,
  EditorContainer,
  HrElement,
  ButtonContainer,
  TextAreaElement,
} from './style'

import './index.css'

class TextEditor extends Component {
  state = {
    textBold: false,
    textItalic: false,
    textUnderline: false,
  }

  onBold = () => {
    this.setState(prevState => ({textBold: !prevState.textBold}))
  }

  onItalic = () => {
    this.setState(prevState => ({textItalic: !prevState.textItalic}))
  }

  onUnderline = () => {
    this.setState(prevState => ({textUnderline: !prevState.textUnderline}))
  }

  render() {
    const {textBold, textItalic, textUnderline} = this.state
    const boldColor = textBold ? '#faff00' : '#f1f5f9'
    const italicColor = textItalic ? '#faff00' : '#f1f5f9'
    const underlineColor = textUnderline ? '#faff00' : '#f1f5f9'

    const fontWeight = textBold === false ? 'normal' : 'bold'
    const fontStyle = textItalic === false ? 'normal' : 'italic'
    const textDecoration = textUnderline === false ? 'normal' : 'underline'

    return (
      <MainContainer>
        <CardContainer>
          <div className="image-content-container">
            <Heading>Text Editor</Heading>
            <ImageElement>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                alt="text editor"
              />
            </ImageElement>
          </div>
          <EditorContainer>
            <ButtonContainer>
              <li>
                <Button
                  type="button"
                  onClick={this.onBold}
                  color={boldColor}
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </Button>
              </li>

              <li>
                <Button
                  type="button"
                  data-testid="italic"
                  color={italicColor}
                  onClick={this.onItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </li>

              <li>
                <Button
                  type="button"
                  color={underlineColor}
                  onClick={this.onUnderline}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </li>
            </ButtonContainer>
            <HrElement />
            <TextAreaElement
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textDecoration={textDecoration}
            />
          </EditorContainer>
        </CardContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
