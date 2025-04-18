// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import * as echarts from 'echarts';
// Import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Landing = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        const chartDom = document.getElementById('audio-wave-chart');
        if (chartDom) {
            const myChart = echarts.init(chartDom);
            const option = {
                animation: false,
                grid: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
                xAxis: {
                    type: 'category',
                    show: false,
                    data: Array.from({ length: 40 }, (_, i) => i)
                },
                yAxis: {
                    type: 'value',
                    show: false
                },
                series: [{
                    data: Array.from({ length: 40 }, () => Math.random() * 60 + 20),
                    type: 'bar',
                    barWidth: 3,
                    itemStyle: {
                        color: '#8A2BE2',
                        borderRadius: [50, 50, 0, 0]
                    },
                    emphasis: {
                        itemStyle: {
                            color: '#9945E7'
                        }
                    }
                }]
            };
            myChart.setOption(option);
            // Simulate audio visualization
            setInterval(() => {
                myChart.setOption({
                    series: [{
                        data: Array.from({ length: 40 }, () => Math.random() * 60 + 20)
                    }]
                });
            }, 1000);
            return () => {
                myChart.dispose();
            };
        }
    }, []);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };
    const featuredStories = [
        {
            id: 1,
            title: "Journey Through the Amazon",
            author: "Emma Wilson",
            duration: "12:45",
            category: "Adventure",
            image: "https://readdy.ai/api/search-image?query=A%20stunning%20adventure%20scene%20in%20the%20Amazon%20rainforest%20with%20lush%20green%20vegetation%2C%20a%20winding%20river%2C%20and%20dramatic%20lighting.%20The%20scene%20is%20captured%20with%20a%20cinematic%20quality%2C%20showing%20the%20vastness%20and%20beauty%20of%20the%20rainforest%20with%20a%20mystical%20atmosphere%20and%20rich%20details.&width=600&height=400&seq=1&orientation=landscape"
        },
        {
            id: 2,
            title: "Lessons from Silicon Valley",
            author: "David Chen",
            duration: "18:30",
            category: "Business",
            image: "https://readdy.ai/api/search-image?query=A%20modern%20tech%20office%20in%20Silicon%20Valley%20with%20sleek%20glass%20architecture%2C%20open%20workspace%20with%20minimalist%20design%2C%20soft%20ambient%20lighting%2C%20and%20a%20panoramic%20view%20of%20the%20city%20skyline.%20The%20scene%20conveys%20innovation%20and%20professional%20atmosphere%20with%20the%20same%20visual%20style.&width=600&height=400&seq=2&orientation=landscape"
        },
        {
            id: 3,
            title: "Finding Peace in Chaos",
            author: "Sarah Johnson",
            duration: "09:15",
            category: "Personal",
            image: "https://readdy.ai/api/search-image?query=A%20serene%20meditation%20scene%20with%20a%20person%20sitting%20peacefully%20by%20a%20calm%20lake%20at%20sunset%2C%20with%20mountains%20in%20the%20background.%20The%20lighting%20is%20warm%20and%20golden%2C%20creating%20a%20tranquil%20atmosphere%20with%20the%20same%20visual%20style%20as%20previous%20images.&width=600&height=400&seq=3&orientation=landscape"
        },
        {
            id: 4,
            title: "Lost in Tokyo",
            author: "Michael Chang",
            duration: "15:20",
            category: "Travel",
            image: "https://readdy.ai/api/search-image?query=A%20vibrant%20nighttime%20scene%20of%20Tokyo%20with%20neon%20lights%2C%20busy%20streets%2C%20and%20traditional%20elements%20mixed%20with%20modern%20architecture.%20The%20image%20captures%20the%20energy%20and%20contrast%20of%20the%20city%20with%20the%20same%20visual%20style%20as%20previous%20images.&width=600&height=400&seq=4&orientation=landscape"
        },
        {
            id: 5,
            title: "The Art of Letting Go",
            author: "Olivia Parker",
            duration: "11:05",
            category: "Life Lessons",
            image: "https://readdy.ai/api/search-image?query=A%20symbolic%20scene%20showing%20hands%20releasing%20butterflies%20or%20lanterns%20into%20a%20sunset%20sky%2C%20representing%20freedom%20and%20letting%20go.%20The%20image%20has%20warm%20colors%20and%20an%20emotional%20quality%20with%20the%20same%20visual%20style%20as%20previous%20images.&width=600&height=400&seq=5&orientation=landscape"
        },
        {
            id: 6,
            title: "Surviving the Wilderness",
            author: "James Cooper",
            duration: "20:45",
            category: "Adventure",
            image: "https://readdy.ai/api/search-image?query=A%20dramatic%20wilderness%20survival%20scene%20with%20a%20person%20standing%20on%20a%20mountain%20peak%20overlooking%20a%20vast%20untouched%20landscape%20with%20forests%20and%20rivers.%20The%20lighting%20is%20dramatic%20with%20golden%20hour%20sunlight%20with%20the%20same%20visual%20style%20as%20previous%20images.&width=600&height=400&seq=6&orientation=landscape"
        }
    ];
    const categories = [
        { name: "Personal", icon: "fa-heart" },
        { name: "Adventure", icon: "fa-mountain" },
        { name: "Life Lessons", icon: "fa-book-open" },
        { name: "Travel", icon: "fa-plane" },
        { name: "Business", icon: "fa-briefcase" },
        { name: "Relationships", icon: "fa-users" },
        { name: "Health", icon: "fa-heartbeat" },
        { name: "Education", icon: "fa-graduation-cap" },
        { name: "Technology", icon: "fa-microchip" },
        { name: "Culture", icon: "fa-globe" }
    ];
    return (
        <div className="min-h-screen bg-[#121212] text-white font-sans">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#12121299] backdrop-blur-md border-b border-[#ffffff20]">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="text-2xl font-bold text-white flex items-center">
                            <i className="fas fa-microphone-alt text-[#8A2BE2] mr-2"></i>
                            <span className="bg-gradient-to-r from-[#8A2BE2] to-[#4A00E0] bg-clip-text text-transparent">StoryWave</span>
                        </div>
                        {windowWidth > 768 && (
                            <nav className="ml-10 hidden md:flex items-center space-x-6">
                                <a href="#explore" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">Explore</a>
                                <a href="#upload" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">Upload Story</a>
                                <a href="#categories" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">Categories</a>
                            </nav>
                        )}
                    </div>
                    {windowWidth > 768 && (
                        <div className="hidden md:flex items-center relative w-1/3">
                            <Input
                                type="text"
                                placeholder="Search stories..."
                                className="bg-[#ffffff10] border-[#ffffff20] rounded-full pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:border-transparent text-sm"
                            />
                            <i className="fas fa-search absolute left-3 text-gray-400"></i>
                            <i className="fas fa-microphone absolute right-3 text-gray-400 cursor-pointer hover:text-[#8A2BE2] transition-colors duration-200"></i>
                        </div>
                    )}
                    <div className="flex items-center space-x-4">
                        {windowWidth > 768 ? (
                            <>
                                <Button variant="outline" className="border-[#8A2BE2] text-[#8A2BE2] hover:bg-[#8A2BE240] transition-all duration-200 !rounded-button whitespace-nowrap">
                                    <i className="fas fa-sign-in-alt mr-2"></i> Log In
                                </Button>
                                <Button className="bg-[#8A2BE2] hover:bg-[#7B27CC] transition-all duration-200 !rounded-button whitespace-nowrap">
                                    <i className="fas fa-user-plus mr-2"></i> Sign Up
                                </Button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={toggleSearch}
                                    className="text-gray-300 hover:text-white p-2 cursor-pointer"
                                >
                                    <i className="fas fa-search text-xl"></i>
                                </button>
                                <button
                                    onClick={toggleMenu}
                                    className="text-gray-300 hover:text-white p-2 cursor-pointer"
                                >
                                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                                </button>
                            </>
                        )}
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && windowWidth <= 768 && (
                    <div className="bg-[#1A1A1A] border-t border-[#ffffff20] py-4 px-4 md:hidden">
                        <nav className="flex flex-col space-y-4">
                            <a href="#explore" className="text-gray-300 hover:text-white transition-colors duration-200 py-2 cursor-pointer">
                                <i className="fas fa-compass mr-2"></i> Explore
                            </a>
                            <a href="#upload" className="text-gray-300 hover:text-white transition-colors duration-200 py-2 cursor-pointer">
                                <i className="fas fa-cloud-upload-alt mr-2"></i> Upload Story
                            </a>
                            <a href="#categories" className="text-gray-300 hover:text-white transition-colors duration-200 py-2 cursor-pointer">
                                <i className="fas fa-th-large mr-2"></i> Categories
                            </a>
                            <Separator className="bg-[#ffffff20]" />
                            <div className="flex space-x-2 pt-2">
                                <Button variant="outline" className="border-[#8A2BE2] text-[#8A2BE2] hover:bg-[#8A2BE240] transition-all duration-200 flex-1 !rounded-button whitespace-nowrap">
                                    <i className="fas fa-sign-in-alt mr-2"></i> Log In
                                </Button>
                                <Button className="bg-[#8A2BE2] hover:bg-[#7B27CC] transition-all duration-200 flex-1 !rounded-button whitespace-nowrap">
                                    <i className="fas fa-user-plus mr-2"></i> Sign Up
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
                {/* Mobile Search */}
                {isSearchOpen && windowWidth <= 768 && (
                    <div className="bg-[#1A1A1A] border-t border-[#ffffff20] py-4 px-4 md:hidden">
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="Search stories..."
                                className="bg-[#ffffff10] border-[#ffffff20] rounded-full pl-10 pr-10 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:border-transparent text-sm"
                                autoFocus
                            />
                            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                            <i className="fas fa-microphone absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-[#8A2BE2] transition-colors duration-200"></i>
                        </div>
                    </div>
                )}
            </header>
            <main className="pt-16">
                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <img
                            src="https://readdy.ai/api/search-image?query=A%20modern%20storytelling%20scene%20with%20a%20gradient%20dark%20purple%20to%20blue%20background%2C%20showing%20silhouettes%20of%20people%20gathered%20around%20a%20digital%20campfire%20with%20audio%20waves%20and%20visualization%20elements.%20The%20left%20side%20has%20a%20darker%20gradient%20that%20will%20blend%20perfectly%20with%20text%20overlay%2C%20while%20the%20right%20shows%20more%20visual%20elements.&width=1440&height=800&seq=7&orientation=landscape"
                            alt="Storytelling Background"
                            className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#12121299] to-[#12121240]"></div>
                    </div>
                    <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                                Share Your Story <br className="hidden md:block" />
                                <span className="bg-gradient-to-r from-[#8A2BE2] to-[#4A00E0] bg-clip-text text-transparent">With The World</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 max-w-xl">
                                Upload audio stories, experiences and connect with listeners globally. Your voice deserves to be heard.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                                <Button className="bg-[#8A2BE2] hover:bg-[#7B27CC] text-white px-8 py-6 text-lg transition-all duration-200 !rounded-button whitespace-nowrap">
                                    <i className="fas fa-headphones-alt mr-2"></i> Start Listening
                                </Button>
                                <Button variant="outline" className="border-[#8A2BE2] text-[#8A2BE2] hover:bg-[#8A2BE240] px-8 py-6 text-lg transition-all duration-200 !rounded-button whitespace-nowrap">
                                    <i className="fas fa-microphone mr-2"></i> Share Your Story
                                </Button>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative w-full max-w-md aspect-square">
                                <div className="absolute inset-0 bg-[#ffffff05] backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <div className="w-3/4 h-3/4 relative">
                                        <div id="audio-wave-chart" className="w-full h-full"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-24 h-24 rounded-full bg-[#8A2BE2] flex items-center justify-center cursor-pointer hover:bg-[#7B27CC] transition-all duration-300 shadow-lg shadow-[#8A2BE240]">
                                                <i className="fas fa-play text-3xl"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Featured Stories Section */}
                <section className="py-20 bg-[#0A0A0A]">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center mb-12">
                            <h2 className="text-3xl font-bold">
                                <i className="fas fa-fire text-[#8A2BE2] mr-2"></i> Featured Stories
                            </h2>
                            <div className="hidden md:flex items-center space-x-2">
                                <Button variant="outline" className="border-[#ffffff20] hover:border-[#8A2BE2] hover:bg-[#8A2BE210] transition-all duration-200 !rounded-button whitespace-nowrap">
                                    <i className="fas fa-filter mr-2"></i> Filter
                                </Button>
                                <Button variant="outline" className="border-[#ffffff20] hover:border-[#8A2BE2] hover:bg-[#8A2BE210] transition-all duration-200 !rounded-button whitespace-nowrap">
                                    <i className="fas fa-sort mr-2"></i> Sort
                                </Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredStories.map(story => (
                                <Card key={story.id} className="bg-[#1A1A1A] border-[#ffffff10] overflow-hidden hover:shadow-lg hover:shadow-[#8A2BE220] transition-all duration-300 group">
                                    <div className="relative aspect-[3/2] overflow-hidden">
                                        <img
                                            src={story.image}
                                            alt={story.title}
                                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0AE6] to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                            <div>
                                                <Badge className="bg-[#8A2BE2] hover:bg-[#7B27CC] mb-2 !rounded-button whitespace-nowrap">
                                                    {story.category}
                                                </Badge>
                                                <p className="text-sm text-gray-300">
                                                    <i className="fas fa-clock mr-1"></i> {story.duration}
                                                </p>
                                            </div>
                                            <div className="w-12 h-12 rounded-full bg-[#8A2BE2] flex items-center justify-center cursor-pointer hover:bg-[#7B27CC] transition-all duration-300 shadow-lg shadow-[#00000040]">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-xl font-semibold mb-2 group-hover:text-[#8A2BE2] transition-colors duration-200">
                                            {story.title}
                                        </h3>
                                        <div className="flex items-center">
                                            <Avatar className="h-8 w-8 mr-2">
                                                <AvatarImage src={`https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20person%20with%20neutral%20background%2C%20high%20quality%2C%20detailed%20facial%20features%2C%20professional%20lighting&width=100&height=100&seq=${story.id + 10}&orientation=squarish`} />
                                                <AvatarFallback>{story.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                            </Avatar>
                                            <span className="text-gray-400">{story.author}</span>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                        <div className="mt-12 text-center">
                            <Button className="bg-transparent border border-[#8A2BE2] text-[#8A2BE2] hover:bg-[#8A2BE210] px-8 transition-all duration-200 !rounded-button whitespace-nowrap">
                                View More Stories <i className="fas fa-arrow-right ml-2"></i>
                            </Button>
                        </div>
                    </div>
                </section>
                {/* Categories Section */}
                <section id="categories" className="py-20 bg-[#121212]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12">
                            <i className="fas fa-th-large text-[#8A2BE2] mr-2"></i> Browse Categories
                        </h2>
                        <ScrollArea className="w-full whitespace-nowrap pb-4">
                            <div className="flex space-x-4">
                                {categories.map((category, index) => (
                                    <div
                                        key={index}
                                        className={`flex-shrink-0 group cursor-pointer ${index === 0 ? 'bg-[#8A2BE2]' : 'bg-[#1A1A1A]'} hover:bg-[#8A2BE2] transition-all duration-300 rounded-xl overflow-hidden w-40 h-48`}
                                    >
                                        <div className="h-full flex flex-col items-center justify-center p-4 text-center">
                                            <div className={`w-16 h-16 rounded-full ${index === 0 ? 'bg-[#ffffff20]' : 'bg-[#8A2BE220]'} group-hover:bg-[#ffffff20] flex items-center justify-center mb-4 transition-all duration-300`}>
                                                <i className={`fas ${category.icon} text-2xl ${index === 0 ? 'text-white' : 'text-[#8A2BE2]'} group-hover:text-white transition-colors duration-300`}></i>
                                            </div>
                                            <h3 className="text-lg font-medium">{category.name}</h3>
                                            <p className="text-sm text-gray-400 mt-2 group-hover:text-gray-200 transition-colors duration-300">
                                                {Math.floor(Math.random() * 1000) + 100} stories
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                </section>
                {/* Advanced Search Section */}
                <section className="py-20 bg-[#0A0A0A]">
                    <div className="container mx-auto px-4">
                        <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-[#ffffff10]">
                            <h2 className="text-3xl font-bold mb-8">
                                <i className="fas fa-search text-[#8A2BE2] mr-2"></i> Find Your Perfect Story
                            </h2>
                            <div className="mb-8 relative">
                                <Input
                                    type="text"
                                    placeholder="Search by title, author, or keywords..."
                                    className="bg-[#ffffff10] border-[#ffffff20] rounded-full pl-12 pr-12 py-6 w-full focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:border-transparent text-lg"
                                />
                                <i className="fas fa-search absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"></i>
                                <i className="fas fa-microphone absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg cursor-pointer hover:text-[#8A2BE2] transition-colors duration-200"></i>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                <div className="space-y-2">
                                    <label className="text-gray-300 block">Duration</label>
                                    <div className="pt-4 px-2">
                                        <Slider
                                            defaultValue={[5, 30]}
                                            max={60}
                                            step={1}
                                            className="[&>.SliderTrack]:bg-[#ffffff20] [&>.SliderRange]:bg-[#8A2BE2] [&>.SliderThumb]:bg-white [&>.SliderThumb]:border-[#8A2BE2] [&>.SliderThumb]:hover:bg-[#8A2BE2]"
                                        />
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-400">
                                        <span>5 min</span>
                                        <span>30 min</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-300 block">Category</label>
                                    <div className="relative">
                                        <div className="bg-[#ffffff10] border border-[#ffffff20] rounded-lg p-3 flex justify-between items-center cursor-pointer">
                                            <span className="text-gray-300">All Categories</span>
                                            <i className="fas fa-chevron-down text-gray-400"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-300 block">Language</label>
                                    <div className="relative">
                                        <div className="bg-[#ffffff10] border border-[#ffffff20] rounded-lg p-3 flex justify-between items-center cursor-pointer">
                                            <span className="text-gray-300">English</span>
                                            <i className="fas fa-chevron-down text-gray-400"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-300 block">Rating</label>
                                    <div className="bg-[#ffffff10] border border-[#ffffff20] rounded-lg p-3 flex space-x-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <i key={star} className={`fas fa-star ${star <= 4 ? 'text-[#8A2BE2]' : 'text-gray-600'} cursor-pointer hover:text-[#8A2BE2] transition-colors duration-200`}></i>
                                        ))}
                                        <span className="text-gray-400 ml-2">& up</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <Button className="bg-[#8A2BE2] hover:bg-[#7B27CC] text-white px-8 py-6 text-lg transition-all duration-200 !rounded-button whitespace-nowrap">
                                    <i className="fas fa-search mr-2"></i> Search Stories
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* How It Works Section */}
                <section className="py-20 bg-[#121212]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-16">
                            <i className="fas fa-magic text-[#8A2BE2] mr-2"></i> How It Works
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-[#1A1A1A] rounded-xl p-8 border border-[#ffffff10] text-center hover:border-[#8A2BE2] hover:shadow-lg hover:shadow-[#8A2BE220] transition-all duration-300">
                                <div className="w-20 h-20 rounded-full bg-[#8A2BE220] flex items-center justify-center mx-auto mb-6">
                                    <i className="fas fa-microphone-alt text-3xl text-[#8A2BE2]"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Record Your Story</h3>
                                <p className="text-gray-400">
                                    Use our easy recording tool or upload your pre-recorded audio. Add background music and effects to enhance your storytelling.
                                </p>
                            </div>
                            <div className="bg-[#1A1A1A] rounded-xl p-8 border border-[#ffffff10] text-center hover:border-[#8A2BE2] hover:shadow-lg hover:shadow-[#8A2BE220] transition-all duration-300">
                                <div className="w-20 h-20 rounded-full bg-[#8A2BE220] flex items-center justify-center mx-auto mb-6">
                                    <i className="fas fa-cloud-upload-alt text-3xl text-[#8A2BE2]"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Upload & Share</h3>
                                <p className="text-gray-400">
                                    Publish your story with a custom cover image, title, and description. Choose categories and tags to help others discover it.
                                </p>
                            </div>
                            <div className="bg-[#1A1A1A] rounded-xl p-8 border border-[#ffffff10] text-center hover:border-[#8A2BE2] hover:shadow-lg hover:shadow-[#8A2BE220] transition-all duration-300">
                                <div className="w-20 h-20 rounded-full bg-[#8A2BE220] flex items-center justify-center mx-auto mb-6">
                                    <i className="fas fa-comments text-3xl text-[#8A2BE2]"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Connect with Listeners</h3>
                                <p className="text-gray-400">
                                    Receive feedback, comments, and build a following. Engage with your audience and discover other storytellers.
                                </p>
                            </div>
                        </div>
                        <div className="mt-16 text-center">
                            <Button className="bg-[#8A2BE2] hover:bg-[#7B27CC] text-white px-8 py-6 text-lg transition-all duration-200 !rounded-button whitespace-nowrap">
                                <i className="fas fa-headphones-alt mr-2"></i> Get Started Today
                            </Button>
                        </div>
                    </div>
                </section>
                {/* Testimonials Section */}
                <section className="py-20 bg-[#0A0A0A]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-16">
                            <i className="fas fa-quote-left text-[#8A2BE2] mr-2"></i> What Our Users Say
                        </h2>
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 5000 }}
                            className="testimonial-swiper"
                        >
                            {[1, 2, 3, 4, 5].map((item) => (
                                <SwiperSlide key={item}>
                                    <div className="bg-[#1A1A1A] rounded-xl p-8 border border-[#ffffff10] h-full">
                                        <div className="flex items-center mb-6">
                                            <Avatar className="h-12 w-12 mr-4">
                                                <AvatarImage src={`https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20diverse%20person%20with%20neutral%20background%2C%20high%20quality%2C%20detailed%20facial%20features%2C%20professional%20lighting&width=100&height=100&seq=${item + 20}&orientation=squarish`} />
                                                <AvatarFallback>U{item}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <h4 className="font-semibold">
                                                    {["Sarah Johnson", "Michael Lee", "Emma Wilson", "David Chen", "Olivia Parker"][item - 1]}
                                                </h4>
                                                <div className="flex text-[#8A2BE2]">
                                                    {Array(5).fill(0).map((_, i) => (
                                                        <i key={i} className={`fas fa-star ${i < 5 ? 'text-[#8A2BE2]' : 'text-gray-600'} text-sm`}></i>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 italic">
                                            {[
                                                "StoryWave has completely transformed how I share my travel experiences. The audio format allows me to convey emotions that written words simply can't capture.",
                                                "As a business coach, I've found an entirely new audience through StoryWave. The platform is intuitive and the community is incredibly supportive.",
                                                "I love how easy it is to record and share my stories. The feedback I've received has been invaluable for my growth as a storyteller.",
                                                "The quality of stories on this platform is outstanding. I've discovered so many fascinating perspectives that I wouldn't have encountered elsewhere.",
                                                "StoryWave has become my daily companion during commutes. The diverse range of stories keeps me engaged and inspired every day."
                                            ][item - 1]}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
                {/* CTA Section */}
                <section className="py-20 bg-[#121212] relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://readdy.ai/api/search-image?query=Abstract%20digital%20audio%20wave%20visualization%20with%20purple%20and%20blue%20colors%20on%20a%20dark%20background%2C%20modern%20and%20sleek%20design%2C%20with%20flowing%20energy%20lines%20representing%20sound%20and%20storytelling%2C%20perfect%20for%20a%20website%20background%20with%20text%20overlay.&width=1440&height=500&seq=8&orientation=landscape"
                            alt="Audio Wave Background"
                            className="w-full h-full object-cover object-center opacity-20"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Share <span className="bg-gradient-to-r from-[#8A2BE2] to-[#4A00E0] bg-clip-text text-transparent">Your Story?</span>
                            </h2>
                            <p className="text-xl text-gray-300 mb-10">
                                Join thousands of storytellers and listeners in our growing community. Your voice matters.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                                <Button className="bg-[#8A2BE2] hover:bg-[#7B27CC] text-white px-8 py-6 text-lg transition-all duration-200 !rounded-button whitespace-nowrap">
                                    <i className="fas fa-microphone-alt mr-2"></i> Start Creating
                                </Button>
                                <Button variant="outline" className="border-[#8A2BE2] text-[#8A2BE2] hover:bg-[#8A2BE240] px-8 py-6 text-lg transition-all duration-200 !rounded-button whitespace-nowrap">
                                    <i className="fas fa-headphones mr-2"></i> Explore Stories
                                </Button>
                            </div>
                            <div className="mt-12 flex justify-center space-x-6">
                                <div className="flex items-center bg-[#1A1A1A] px-6 py-3 rounded-full border border-[#ffffff20]">
                                    <i className="fab fa-apple text-2xl mr-3"></i>
                                    <div className="text-left">
                                        <div className="text-xs">Download on the</div>
                                        <div className="font-semibold">App Store</div>
                                    </div>
                                </div>
                                <div className="flex items-center bg-[#1A1A1A] px-6 py-3 rounded-full border border-[#ffffff20]">
                                    <i className="fab fa-google-play text-2xl mr-3"></i>
                                    <div className="text-left">
                                        <div className="text-xs">Get it on</div>
                                        <div className="font-semibold">Google Play</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer */}
            <footer className="bg-[#0A0A0A] border-t border-[#ffffff10] pt-16 pb-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <div>
                            <div className="text-2xl font-bold text-white flex items-center mb-6">
                                <i className="fas fa-microphone-alt text-[#8A2BE2] mr-2"></i>
                                <span className="bg-gradient-to-r from-[#8A2BE2] to-[#4A00E0] bg-clip-text text-transparent">StoryWave</span>
                            </div>
                            <p className="text-gray-400 mb-6">
                                Connecting the world through audio storytelling. Share your voice, discover new perspectives.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-[#ffffff10] flex items-center justify-center text-gray-400 hover:bg-[#8A2BE2] hover:text-white transition-all duration-200 cursor-pointer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-[#ffffff10] flex items-center justify-center text-gray-400 hover:bg-[#8A2BE2] hover:text-white transition-all duration-200 cursor-pointer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-[#ffffff10] flex items-center justify-center text-gray-400 hover:bg-[#8A2BE2] hover:text-white transition-all duration-200 cursor-pointer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-[#ffffff10] flex items-center justify-center text-gray-400 hover:bg-[#8A2BE2] hover:text-white transition-all duration-200 cursor-pointer">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-[#8A2BE2] transition-colors duration-200 cursor-pointer">Home</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#8A2BE2] transition-colors duration-200 cursor-pointer">Explore</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#8A2BE2] transition-colors duration-200 cursor-pointer">Upload Story</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#8A2BE2] transition-colors duration-200 cursor-pointer">Categories</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#8A2BE2] transition-colors duration-200 cursor-pointer">About Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-6">Support</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-[#8A2BE2] transition-colors duration-200 cursor-pointer">Help Center</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#8A2BE2] transition-colors duration-200 cursor-pointer">Community Guidelines</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#8A2BE2] transition-colors duration-200 cursor-pointer">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#8A2BE2] transition-colors duration-200 cursor-pointer">Terms of Service</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[#8A2BE2] transition-colors duration-200 cursor-pointer">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
                            <p className="text-gray-400 mb-4">
                                Get weekly updates on new stories and features.
                            </p>
                            <div className="flex mb-4">
                                <Input
                                    type="email"
                                    placeholder="Your email address"
                                    className="bg-[#ffffff10] border-[#ffffff20] rounded-l-lg border-r-0 focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:border-transparent text-sm"
                                />
                                <Button className="bg-[#8A2BE2] hover:bg-[#7B27CC] rounded-l-none !rounded-button whitespace-nowrap">
                                    <i className="fas fa-paper-plane"></i>
                                </Button>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                    <i className="fab fa-cc-visa text-2xl text-gray-400 mr-2"></i>
                                    <i className="fab fa-cc-mastercard text-2xl text-gray-400 mr-2"></i>
                                    <i className="fab fa-cc-paypal text-2xl text-gray-400"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Separator className="bg-[#ffffff10] mb-8" />
                    <div className="text-center text-gray-500 text-sm">
                        <p>&copy; {new Date().getFullYear()} StoryWave. All rights reserved.</p>
                        <p className="mt-2">
                            Designed with <i className="fas fa-heart text-[#8A2BE2]"></i> for storytellers worldwide
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Landing
