import React from 'react';
import { TrendingUp, RefreshCw, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface TrendingTopicsProps {
  topics: string[];
  onSelect: (topic: string) => void;
  onRefresh: () => void;
  isLoading: boolean;
}

export function TrendingTopics({ topics, onSelect, onRefresh, isLoading }: TrendingTopicsProps) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div className="flex items-center gap-2">
          <div className="bg-red-100 p-1.5 rounded-lg text-red-600">
            <TrendingUp size={18} />
          </div>
          <h3 className="font-bold text-slate-900 italic">Trending in Nepal</h3>
        </div>
        <button 
          onClick={onRefresh}
          disabled={isLoading}
          className="p-2 hover:bg-slate-200 rounded-xl transition-colors text-slate-400 hover:text-red-600 disabled:opacity-50"
          title="Refresh trends"
        >
          <RefreshCw size={18} className={isLoading ? 'animate-spin' : ''} />
        </button>
      </div>
      
      <div className="p-4">
        {isLoading && topics.length === 0 ? (
          <div className="space-y-3 py-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-10 bg-slate-100 rounded-xl animate-pulse w-full" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2">
            {topics.map((topic, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onSelect(topic)}
                className="group flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 transition-all text-left border border-transparent hover:border-red-100"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 group-hover:bg-red-100 text-[10px] font-black flex items-center justify-center text-slate-400 group-hover:text-red-600 transition-colors">
                  {index + 1}
                </div>
                <span className="text-sm font-medium text-slate-700 group-hover:text-red-700 line-clamp-1 flex-grow">
                  {topic}
                </span>
                <Zap size={14} className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            ))}
          </div>
        )}
        
        {!isLoading && topics.length === 0 && (
          <div className="py-8 text-center text-slate-400 text-sm italic">
            No trends found. Try refreshing.
          </div>
        )}
      </div>
      
      <div className="px-6 py-3 bg-slate-50 border-t border-slate-100">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center">
          Powered by Buzzline AI
        </p>
      </div>
    </div>
  );
}
