export default function StoryTray({ stories }) {
  const stories1 = []
  stories1.push({
    id: 'create',
    label: 'Create Story',
  })
  const nextStories = stories.push(stories1)
  return (
    <ul>
      {nextStories.map(story => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  )
}
