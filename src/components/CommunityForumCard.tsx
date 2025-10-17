import type { CommunityForumPost } from '../types/community'

interface CommunityForumCardProps {
  post: CommunityForumPost
}

export function CommunityForumCard({ post }: CommunityForumCardProps) {
  return (
    <article className="community-card community-card--forum">
      <header className="community-card__header">
        <div>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </div>
        <span className="community-chip community-chip--ghost">{post.category}</span>
      </header>
      <div className="community-card__meta">
        <span>por {post.author}</span>
        <span>{post.timeAgo}</span>
      </div>
      <footer className="community-card__footer">
        <span>💬 {post.replies}</span>
        <span>❤️ {post.likes}</span>
      </footer>
    </article>
  )
}
