class AsyncTest {
  constructor(url) {
    this.url = url;
  }

  getApi = async () => {
    const fetchData = await fetch(this.url, {
      method: 'GET',
    });
    const result = await fetchData.json();
    return result;
  };
}

function Palindromes(str) {
  return str.split('').every((item, index) => {
    // console.log(item, index);
    return item === str[str.length - index - 1];
  });
}

class MockTest {
  getter = (a, b) => {
    return a + b;
  }
}

export {
  Palindromes,
  AsyncTest,
  MockTest,
};

