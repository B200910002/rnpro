// import {Component} from 'react';
// import {
//   Container,
//   Header,
//   Title,
//   Content,
//   Footer,
//   FooterTab,
//   Button,
//   Left,
//   Right,
//   Body,
//   Icon,
//   Text,
// } from '@rneui/base';

// class AnatomyExample extends Component {
//   render() {
//     return (
//       <Container>
//         <Header>
//           <Left>
//             <Button transparent>
//               <Icon name="menu" />
//             </Button>
//           </Left>
//           <Body>
//             <Title>Header</Title>
//           </Body>
//           <Right />
//         </Header>
//         <Content>
//           <Text>This is Content Section</Text>
//         </Content>
//         <Footer>
//           <FooterTab>
//             <Button full>
//               <Text>Footer</Text>
//             </Button>
//           </FooterTab>
//         </Footer>
//       </Container>
//     );
//   }
// }

// export default AnatomyExample;

import {Component} from 'react';
import {Container, Header, Button, Icon, Text} from '@rneui/base';
import {View} from 'react-native';

class AnatomyExample extends Component {
  render() {
    return (
      <View>
        <Header>
          <Button transparent>
            <Icon name="menu" />
          </Button>
          <Text>Header</Text>
        </Header>
        <Text>This is Content Section</Text>
        <Button full>
          <Text>Footer</Text>
        </Button>
      </View>
    );
  }
}

export default AnatomyExample;
