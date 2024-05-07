import {Component} from 'react'
import {
  MemeContainer,
  Heading,
  InputContainer,
  InputBox,
  InputLabel,
  SelectContainer,
  Options,
  GenerateButton,
  ImageContainer,
  MainContainer,
  TextHeading,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    topText: '',
    bottomText: '',
    imageUrl: '',
    generator: false,
    fontSize: '',
  }

  onChangeBackgroundImage = event => {
    this.setState({imageUrl: event.target.value})
    console.log(event.target.value)
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
    console.log(event.target.value)
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
    console.log(event.target.value)
  }

  selectFontSize = event => {
    this.setState({fontSize: event.target.value})
    console.log(event.target.value)
  }

  onSubmitFrom = event => {
    event.preventDefault()
    this.setState({generator: true})
    console.log('Generate')
  }

  render() {
    const {imageUrl, generator, fontSize, topText, bottomText} = this.state
    console.log('FontSize', fontSize, generator)
    return (
      <MainContainer onSubmit={this.onSubmitFrom}>
        <MemeContainer>
          <Heading>Meme Generator</Heading>
          <InputContainer>
            <InputLabel htmlFor="imageUrl">Image URL</InputLabel>
            <InputBox
              placeholder="Enter the image URL"
              onChange={this.onChangeBackgroundImage}
              id="imageUrl"
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="Top Text">Top Text</InputLabel>
            <InputBox
              placeholder="Enter the Top Text"
              onChange={this.onChangeTopText}
              id="Top Text"
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="Bottom Text">Bottom Text</InputLabel>
            <InputBox
              placeholder="Enter the Bottom Text"
              onChange={this.onChangeBottomText}
              id="Bottom Text"
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="Font Size">Font Size</InputLabel>
            <SelectContainer onChange={this.selectFontSize} id="Font Size">
              {fontSizesOptionsList.map(eachItem => (
                <Options key={eachItem.optionId} value={eachItem.displayText}>
                  {eachItem.displayText}
                </Options>
              ))}
            </SelectContainer>
          </InputContainer>
          <GenerateButton type="submit">Generate</GenerateButton>
        </MemeContainer>
        {generator ? (
          <ImageContainer data-testid="meme" backImage={imageUrl}>
            <TextHeading size={`${fontSize}px`}>{topText}</TextHeading>
            <TextHeading size={`${fontSize}px`}>{bottomText}</TextHeading>
          </ImageContainer>
        ) : null}
      </MainContainer>
    )
  }
}

export default MemeGenerator
