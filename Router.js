import Scenes from './Scenes';

let Router = {

  getRoute(routeName) {
    return {
      getSceneClass() {
        return Scenes[routeName]
      }
    };
  }
};

export default Router;
