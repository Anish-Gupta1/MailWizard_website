
interface FeedbackCardProps {
  name: string
  email: string
  content: string
  avatar: string
}

export default function FeedbackCard({ name, email, content, avatar }: FeedbackCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md h-full flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0">
          <img src={avatar || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full object-cover" />
        </div>
        <div>
          <h3 className="font-semibold text-purple-900">{name}</h3>
          <p className="text-sm text-gray-500">
            {email}
          </p>
        </div>
      </div>

      <p className="text-gray-700 flex-grow mb-4">{content}</p>

    </div>
  )
}

