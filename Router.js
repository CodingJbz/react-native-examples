let YourRouter = {
  getHomeRoute() {
    return {
      getSceneClass() {
        return require('./ExampleList');
      }
    };
  },
  
  getListViewRoute() {
    return {
      getSceneClass() {
        return require('./examples/ListView.js');
      }
    };
  }

};

export default YourRouter;
