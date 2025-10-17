import { useState } from 'react'
import { CommunityChallengeCard } from '../components/CommunityChallengeCard'
import { CommunityForumCard } from '../components/CommunityForumCard'
import { CommunityRankingList } from '../components/CommunityRankingList'
import { CommunitySummaryGrid } from '../components/CommunitySummaryGrid'
import { CommunityTabs } from '../components/CommunityTabs'
import {
  communityChallenges,
  communityForumPosts,
  communityRanking,
  communitySummaries,
  communityTabs,
} from '../data/community'
import type { CommunityTabId } from '../types/community'

const SEARCH_PLACEHOLDER: Record<CommunityTabId, string> = {
  challenges: 'Buscar retos o anfitriones...',
  forum: 'Buscar temas o autores...',
  ranking: 'Buscar atletas o posiciones...',
}

export function CommunityPage() {
  const [activeTab, setActiveTab] = useState<CommunityTabId>('challenges')

  return (
    <div className="community-page">
      <header className="community-header">
        <div>
          <p className="eyebrow">Conecta, comparte y encuentra motivación</p>
          <h1>Comunidad FitLife</h1>
          <p className="subtitle">
            Participa en retos colectivos, comparte tus avances y conoce a otras personas con objetivos similares.
          </p>
        </div>
        <button type="button" className="primary-button">
          <span aria-hidden="true">＋</span> Nuevo Post
        </button>
      </header>

      <CommunitySummaryGrid items={communitySummaries} />

      <CommunityTabs tabs={communityTabs} activeTabId={activeTab} onTabChange={setActiveTab} />

      <div className="community-toolbar">
        <div className="community-search">
          <span aria-hidden="true">🔍</span>
          <input type="search" placeholder={SEARCH_PLACEHOLDER[activeTab]} />
        </div>
        {activeTab !== 'ranking' && (
          <button type="button" className="ghost-button">
            Filtrar
          </button>
        )}
      </div>

      <section className="community-content" aria-live="polite">
        {activeTab === 'challenges' && (
          <div className="community-grid">
            {communityChallenges.map((challenge) => (
              <CommunityChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        )}

        {activeTab === 'forum' && (
          <div className="community-list">
            {communityForumPosts.map((post) => (
              <CommunityForumCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {activeTab === 'ranking' && <CommunityRankingList entries={communityRanking} />}
      </section>
    </div>
  )
}
