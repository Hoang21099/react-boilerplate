/**
 * Dashboard page component
 */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Activity,
  ChevronUp,
  ChevronDown 
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Sidebar from '@/components/layout/Sidebar';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ComponentType<any>;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, trend, icon: Icon }) => {
  return (
    <Card hover>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {value}
          </p>
          <div className="flex items-center mt-2">
            {trend === 'up' ? (
              <ChevronUp className="h-4 w-4 text-green-500" />
            ) : (
              <ChevronDown className="h-4 w-4 text-red-500" />
            )}
            <span className={`text-sm font-medium ${
              trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {change}
            </span>
            <span className="text-sm text-gray-500 ml-1">vs last month</span>
          </div>
        </div>
        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
    </Card>
  );
};

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const stats = [
    {
      title: t('dashboard.stats.totalUsers'),
      value: '12,345',
      change: '+12.5%',
      trend: 'up' as const,
      icon: Users,
    },
    {
      title: t('dashboard.stats.activeUsers'),
      value: '8,921',
      change: '+8.2%',
      trend: 'up' as const,
      icon: Activity,
    },
    {
      title: t('dashboard.stats.totalRevenue'),
      value: '$45,678',
      change: '+15.3%',
      trend: 'up' as const,
      icon: DollarSign,
    },
    {
      title: t('dashboard.stats.growthRate'),
      value: '23.1%',
      change: '-2.4%',
      trend: 'down' as const,
      icon: TrendingUp,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t('dashboard.title')}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {t('dashboard.welcome', { name: user?.name })}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  change={stat.change}
                  trend={stat.trend}
                  icon={stat.icon}
                />
              ))}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Recent Activity */}
              <Card>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Recent Activity
                  </h3>
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-center space-x-4">
                      <div className="h-2 w-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900 dark:text-white">
                          New user registration
                        </p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Actions */}
              <Card>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Quick Actions
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Frequently used actions
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="h-20 flex flex-col items-center justify-center">
                    <Users className="h-6 w-6 mb-2" />
                    <span className="text-sm">Add User</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                    <TrendingUp className="h-6 w-6 mb-2" />
                    <span className="text-sm">View Reports</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                    <DollarSign className="h-6 w-6 mb-2" />
                    <span className="text-sm">Billing</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                    <Activity className="h-6 w-6 mb-2" />
                    <span className="text-sm">Analytics</span>
                  </Button>
                </div>
              </Card>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <Card className="xl:col-span-2">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Revenue Overview
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Monthly revenue trends
                  </p>
                </div>
                <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">
                    Chart component would go here
                  </p>
                </div>
              </Card>

              <Card>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Top Regions
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    User distribution
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    { region: 'North America', percentage: 45, users: '5,432' },
                    { region: 'Europe', percentage: 30, users: '3,621' },
                    { region: 'Asia Pacific', percentage: 20, users: '2,410' },
                    { region: 'Others', percentage: 5, users: '603' },
                  ].map((item) => (
                    <div key={item.region} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-900 dark:text-white">{item.region}</span>
                        <span className="text-gray-500">{item.users}</span>
                      </div>
                      <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;