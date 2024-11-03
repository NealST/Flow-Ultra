// 应用运行时配置
import { lazy } from 'react';
import Home from './pages/home';

const Innovation = lazy(() => import('./pages/innovation'));
const Subscribe = lazy(() => import('./pages/subscribe'));

// 应用的场景类型
export const sceneList = [
  {
    icon: '',
    id: 'home',
    label: '写作',
    path: '/',
    Component: Home
  },
  {
    icon: '',
    id: 'subscribe',
    label: '订阅',
    path: '/subscribe',
    Component: Subscribe,
  },
  {
    icon: '',
    id: 'innovation',
    label: '创意',
    path: '/innovation',
    Component: Innovation,
  }
]

