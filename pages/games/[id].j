import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameCard from '../components/GameCard';
import { games } from '../data/games';

export default function Games() {
  const [search, setSearch] = useState('');
  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(search.toLowerCase()) ||
    game.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="pt-20 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Available Crypto Games</h2>
        <input
          type="text"
          placeholder="Search by title or tag (e.g., Bitcoin, DeFi)..."
          className="w-full mb-8 p-3 bg-slate-800 rounded-lg text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
