import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const Navigation = () => {
  const [isLoggedIn] = useState(true); // For demo purposes


  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Phuket Travel Advisor</span>
          </Link>


          <div className="flex items-center space-x-4">
            <Link to="/question">
              <Button
                variant="outline"
                className="rounded-full border-cyan-200 text-cyan-600 hover:bg-cyan-50"
              >
                คุยกับน้องออฟอวัน
              </Button>
            </Link>
            <Link to="#">
              <Button
                variant="outline"
                className="rounded-full border-cyan-200 text-cyan-600 hover:bg-cyan-50"
              >
                ลงทะเบียน
              </Button>
            </Link>
           
            {isLoggedIn && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer hover:ring-2 hover:ring-cyan-300 transition-all">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                    <AvatarFallback className="bg-gradient-to-br from-cyan-400 to-blue-500 text-white">
                      <User size={20} />
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-48 bg-white border border-gray-200 rounded-xl shadow-lg"
                >
                  <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 rounded-lg">
                    <LogOut className="mr-2 h-4 w-4 text-gray-600" />
                    <span className="text-gray-700">Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navigation;