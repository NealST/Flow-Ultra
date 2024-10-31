// 应用运行时配置
import { lazy } from 'react';
import Home from './pages/home';

const Innovation = lazy(() => import('./pages/innovation'));
const Subscribe = lazy(() => import('./pages/subscribe'));

// 应用的场景类型
export const sceneList = [
  {
    icon: '',
    label: '写作',
    path: '/',
    Component: Home
  },
  {
    icon: '',
    label: '订阅',
    path: '/subscribe',
    Component: Subscribe,
  },
  {
    icon: '',
    label: '创意',
    path: '/innovation',
    Component: Innovation,
  }
]

