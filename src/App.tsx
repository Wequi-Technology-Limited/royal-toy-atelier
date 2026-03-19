import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { CollectionPage } from '@/pages/CollectionPage';
import { ContactPage } from '@/pages/ContactPage';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
