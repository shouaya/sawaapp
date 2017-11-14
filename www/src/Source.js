const Source = {
  company: {name:'company', query:{name: 'wd_company-name', limit: 10, offset: 0}, col:'name'},
  page: {name:'page', query:{name: 'wd_page-title', limit: 10, offset: 0}, col:'title'},
  tag: {name:'tag', query:{name: 'mst_tag-name', limit: 10, offset: 0}, col:'name'},
  category: {name:'category', query:{name: 'mst_category-name', limit: 10, offset: 0}, col:'name'},
  corporation: {name:'corporation', query:{name: 'mst_corporation-name', limit: 10, offset: 0}, col:'name'},
};
export default Source;