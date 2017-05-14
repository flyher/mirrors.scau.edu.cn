var app = angular.module('indexApp', []);
app.controller('indexController', function ($scope) {
  $scope.title = 'body';
  $scope.sourcelist = [
    {
      id: 1,
      name: 'Archlinux',
      update: '2017-05-11 01:04:26',
      sourcelink: 'http://mirrors.scau.edu.cn/archlinux/',
      helplink: ''
    },
    {
      id: 2,
      name: 'CentOS',
      update: '2017-05-11 01:01:35',
      sourcelink: 'http://mirrors.scau.edu.cn/centos/',
      helplink: ''
    },
    {
      id: 3,
      name: 'Debian',
      update: '2017-05-11 01:18:25',
      sourcelink: 'http://mirrors.scau.edu.cn/debian/',
      helplink: ''
    },
    {
      id: 4,
      name: 'Epel',
      update: '2017-05-11 01:01:30',
      sourcelink: 'http://mirrors.scau.edu.cn/epel/',
      helplink: ''
    },
    {
      id: 5,
      name: 'Pypi',
      update: '',
      sourcelink: 'http://mirrors.scau.edu.cn/pypi/',
      helplink: ''
    },
    {
      id: 6,
      name: 'Raspbian',
      update: '2017-05-11 01:02:54',
      sourcelink: 'http://mirrors.scau.edu.cn/raspbian/',
      helplink: ''
    },
    {
      id: 7,
      name: 'Ubuntu',
      update: '2017-05-11 01:14:43',
      sourcelink: 'http://mirrors.scau.edu.cn/ubuntu/',
      helplink: ''
    },
    {
      id: 8,
      name: 'Ubuntu-CDImage',
      update: '2017-05-11 01:01:21',
      sourcelink: 'http://mirrors.scau.edu.cn/ubuntu-cdimage/',
      helplink: ''
    }
  ];
  $scope.isolist = [
    {
      id: 1,
      name: 'Archlinux',
      link: '/archlinux/iso/'
    }, {
      id: 2,
      name: 'Ubuntu',
      link: '/ubuntu-cdimage/ubuntu/releases/'
    }, {
      id: 3,
      name: 'CentOS',
      link: '/centos/6.8/isos/'
    }, {
      id: 4,
      name: 'Xubuntu',
      link: '/ubuntu-cdimage/xubuntu/releases/'
    }, {
      id: 5,
      name: 'Ubuntu-kylin',
      link: '/ubuntu-cdimage/ubuntukylin/releases/'
    }
  ];
  $scope.news = [
    {
      id: 1,
      title: '配置文档补齐',
      update:'03-10',
      link: 'http://mirrors.scau.edu.cn/news/155'
    }, {
      id: 2,
      title: '启用华农mirrors子域名',
      update:'03-10',
      link: 'http://mirrors.scau.edu.cn/news/153'
    }
  ];
});