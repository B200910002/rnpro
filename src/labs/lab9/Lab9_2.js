import {Component} from 'react';
import {SearchBar} from '@rneui/base';

class App extends Component {
  state = {
    search: '',
  };
  updateSearch = search => {
    this.setState({search});
  };
  render() {
    const {search} = this.state;
    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}
export default App;
