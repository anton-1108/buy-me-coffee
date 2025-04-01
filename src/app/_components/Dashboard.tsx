import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MessageSquare,
  Share2,
  Terminal,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-xl font-bold flex items-center">
              <span className="mr-2">☕</span> Buy Me Coffee
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="h-8 w-8">
              <img
                src="/placeholder.svg?height=32&width=32"
                alt="User avatar"
              />
            </Avatar>
            <span className="font-medium">Jake</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-gray-200 min-h-[calc(100vh-57px)] p-4">
          <nav className="space-y-4">
            <div className="font-medium text-primary">Home</div>
            <div className="text-gray-600">Explore</div>
            <div className="flex items-center text-gray-600">
              <span>View page</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </div>
            <div className="text-gray-600">Account settings</div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Profile Header */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
              <Avatar className="h-14 w-14">
                <img
                  src="/placeholder.svg?height=56&width=56"
                  alt="Jake's profile"
                />
              </Avatar>
              <div>
                <h1 className="text-xl font-bold">Jake</h1>
                <p className="text-gray-600 text-sm">
                  buymeacoffee.com/baconpancakes1
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="bg-black text-white hover:bg-gray-800"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share page link
            </Button>
          </div>

          {/* Earnings Card */}
          <Card className="p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">Earnings</h2>
              <Button variant="outline" className="flex items-center gap-2">
                Last 30 days
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-4xl font-bold">$450</div>
          </Card>

          {/* Recent Transactions */}
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-xl font-medium">Recent transactions</h2>
            <Button variant="ghost" className="flex items-center gap-2">
              <span>Amount</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>

          {/* Transactions List */}
          <Card className="overflow-hidden">
            {transactions.map((transaction, index) => (
              <div
                key={index}
                className={`p-4 ${
                  index !== transactions.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    {transaction.avatar ? (
                      <Avatar className="h-10 w-10">
                        <img
                          src={transaction.avatar || "/placeholder.svg"}
                          alt={transaction.name}
                        />
                      </Avatar>
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-medium">
                        CN
                      </div>
                    )}
                    <div>
                      <div className="font-medium">{transaction.name}</div>
                      <div className="text-sm text-gray-500">
                        {transaction.url}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="font-medium text-green-600">
                      {transaction.amount}
                    </div>
                    <div className="text-sm text-gray-500">
                      {transaction.time}
                    </div>
                  </div>
                </div>
                {transaction.message && (
                  <div className="ml-13 pl-13 text-gray-700 mt-2">
                    {transaction.message}
                    {transaction.showMore && (
                      <button className="text-primary text-sm ml-1">
                        Show more
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center items-center p-4 border-t border-gray-200">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="mx-4">20 / 42</span>
              <Button variant="ghost" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </main>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full border-t border-gray-200 bg-white">
        <div className="flex justify-center gap-4 p-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-green-500 text-white hover:bg-green-600"
          >
            <Terminal className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-green-500 text-white hover:bg-green-600"
          >
            <Terminal className="h-5 w-5" />
          </Button>
        </div>
      </footer>
    </div>
  );
}

const transactions = [
  {
    name: "Guest",
    url: "instagram.com/welesley",
    amount: "+ $1",
    time: "10 hours ago",
    message:
      "Thank you for being so awesome everyday! You always manage to brighten up my day when I'm feeling down. Although $1 isn't that much money it's all I can contribute at the moment",
    avatar: null,
  },
  {
    name: "John Doe",
    url: "buymeacoffee.com/bdsadas",
    amount: "+ $10",
    time: "10 hours ago",
    message: "Thank you for being so awesome everyday!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Radicals",
    url: "buymeacoffee.com/gkfgrew",
    amount: "+ $2",
    time: "10 hours ago",
    message: null,
    avatar: null,
  },
  {
    name: "Guest",
    url: "facebook.com/penelopeb",
    amount: "+ $5",
    time: "10 hours ago",
    message: null,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Fan1",
    url: "buymeacoffee.com/supporterone",
    amount: "+ $10",
    time: "10 hours ago",
    message:
      "Thank you for being so awesome everyday! You always manage to brighten up my day when I'm feeling down. Although $1 isn't that much money it's all I can contribute at the moment. When I become successful I will be sure to buy you...",
    showMore: true,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Guest",
    url: "instagram.com/",
    amount: "+ $1",
    time: "10 hours ago",
    message: null,
    avatar: null,
  },
];
