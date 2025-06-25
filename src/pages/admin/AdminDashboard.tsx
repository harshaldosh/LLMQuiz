import React, { useEffect, useState } from 'react';
import { BookOpen, Users, DollarSign, TrendingUp, Plus, Eye, Edit} from 'lucide-react';
import { Link } from 'react-router-dom';
import { dbService } from '../../services/database';
import type { Course } from '../../types/course';

const AdminDashboard: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const coursesData = await dbService.getAllCourses();
      setCourses(coursesData);
    } catch (error) {
      console.error('Failed to load courses:', error);
    } finally {
      setLoading(false);
    }
  };

  

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
      </div>

      </div>
  );
};

export default AdminDashboard;