import { StatusBar } from 'expo-status-bar';
import "@/styles/global.css";
import { Profile } from '@/app/Profile';

export default function App() {
  return (
    <>
      <Profile />
      <StatusBar style="light" />
    </>
  );
}


