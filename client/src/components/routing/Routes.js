import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";
import Contact from "../other/Contact/Contact";
import About from "../other/About/About";
import Alert from "../Layout/Alert/Alert";
import Dashboard from "../dashboard/Dashboard";
import PrivateRoute from "../routing/PrivateRoute";
import Account from "../account/Account";
import Users from "../users/Users";
import Profile from "../profile/Profile";
import Posts from "../posts/Posts";
import TopicPosts from "../posts/TopicPosts";
import Post from "../post/Post";
import Search from "../search/Search";
import Results from "../results/Results";
import Case from "../case/Case";
import NotFound from "../Layout/NotFound/NotFound";
import CreateProfile from "../profile-forms/CreateProfile";
import EditProfile from "../profile-forms/EditProfile";
import NamusCase from "../case/NamusCase";
import CrimeCase from "../case/CrimesCase";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/search" component={Search} />
        <PrivateRoute exact path="/results" component={Results} />
        <PrivateRoute exact path="/users" component={Users} />
        <PrivateRoute exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/account" component={Account} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:topic" component={TopicPosts} />
        <PrivateRoute exact path="/post/:id" component={Post} />
        <PrivateRoute exact path="/case/:id" component={Case} />
        <Route exact path="/namus/case/:id" component={NamusCase} />
        <Route exact path="/crimes/case/:id" component={CrimeCase} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
