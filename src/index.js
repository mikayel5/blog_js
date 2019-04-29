import {HeaderComponent}  from './components/header.component'
import {NavigationComponent} from './components/navigation.component'
import {FavoriteComponet} from './components/favorite.component'
import {Createcomponent} from './components/create.component'
import {PostsComponent} from './components/posts.component'


 new HeaderComponent('header');

 const navigation = new NavigationComponent('navigation');

 const favorite = new FavoriteComponet('favorite');
 const create = new Createcomponent('create');
 const posts = new PostsComponent('posts');

 navigation.registerTabs([
     {name:'create', component: create},
     {name:'posts', component: posts},
     {name:'favorite', component: favorite},
 ])