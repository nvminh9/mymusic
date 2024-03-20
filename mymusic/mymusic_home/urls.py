
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),
    path('home/', views.home, name="home"),
    path('home/profile/', views.profile, name="profile"),
    path('home/Dsp/', views.Dsp, name="Dsp"),
    path('home/search/', views.searchPage, name="searchPage"),
    path('home/profile/profileSettings/', views.profileSettings, name="profileSettings"),
    path('register/', views.register, name="register"),
    path('login/', views.loginPage, name="login"),
    # path('accounts/login/?next=/', views.loginPage, name="loginAccounts"),
    path('logout/', views.logoutPage, name="logout"),
    path('home/search/searchResult/', views.searchResult, name="searchResult"),
    path('home/listByGenre/', views.listByGenre, name="listByGenre"),
    path('home/listByArtist/', views.listByArtist, name="listByArtist"),
    # path('home/playSong/', views.playSong, name="listByArtist"),
    path('play_song/', views.activeSong, name="play_song"), 
    # path('music/', views.activeSong_pem, name="activeSong_pem"),    
]

