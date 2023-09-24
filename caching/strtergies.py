"""
Caching types:

1. Cache Aside -> name suggests ... Cache is put to the side and user write to the db directly.
    Pros: 

    Cons: 
        If cache fails, read heavy tasks can add too much load on the system..
        Can have Write inconsistency 

2. Read Through: user -> cache (if cache miss) -> Db

    Pros: Read consistency
    Cons: 
        Initial Heavy cache misses ( Can be solved by preheating cache )
        Writing overhead for cache

3. Write Through: Data written to cache then to DB

    Pros: Write consistency

4. Write Behind/Back: Data written to Cache and async written to DB. Query stored in memory of cache\
                        then after sometime flushed on the the DB disk.

    Pros: Best for write heavy workloads, can reduce further with batching

    Cons: If not properly scheduled, Cache failure may lead to data failure permanently.

"""