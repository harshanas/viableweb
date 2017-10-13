import MySQLdb
def connect(auth_key):
    db = MySQLdb.connect(host="localhost",user="root",passwd="",db="techno")
    cur = db.cursor()

    return db,cur

