source "https://rubygems.org"

# gem "jekyll", "~> 4.0.0"
gem "github-pages", group: :jekyll_plugins

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
    gem "tzinfo", "~> 2.0.1"
    gem "tzinfo-data", "~> 1.2019.3"
end

gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?
